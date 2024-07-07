// External Dependencies.
import React, { ReactElement, useEffect } from 'react';

// Divi Dependencies.
import {
  ModuleContainer,
  ElementComponents,
} from '@divi/module';
import { useFetch } from '@divi/rest';

// Local Dependencies.
import { DynamicModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { map } from 'lodash';
import { __ } from '@wordpress/i18n';
import { ModuleScriptData } from './module-script-data';
import { moduleClassnames } from './module-classnames';

/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {DynamicModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
const DynamicModuleEdit = (props: DynamicModuleEditProps): ReactElement => {
  const {
    attrs,
    id,
    name,
    elements,
    defaultPrintedStyleAttrs,
  } = props;

  const {
    fetch,
    response,
    isLoading,
  } = useFetch<any[]>([]);

  const PostTitleHeading = attrs?.postTitle?.decoration?.font?.font?.desktop?.value?.headingLevel;
  const postsNumber = parseInt(attrs?.postItems?.innerContent?.desktop?.value?.postsNumber);

  const viewType = attrs?.tblStripes?.advanced?.applyTo?.desktop?.value;



  const viewType2 = attrs?.tblStripes2?.advanced?.applyTo?.desktop?.value ?? defaultPrintedStyleAttrs?.tblStripes2?.advanced?.applyTo?.desktop?.value;

  /**
   * Fetches new Portfolio Posts on parameter changes.
   */
  useEffect(() => {
    fetch({
      restRoute: `/wp/v2/posts?context=view&per_page=${postsNumber}`,
      method:    'GET',
    }).
    catch((error) => {
      console.error(error);
    });
  }, [postsNumber]);

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      componentType="edit"
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {
        ! isLoading && (
          <>
            <ElementComponents
              attrs={attrs?.module?.decoration ?? {}}
              id={id}
            />
            <div className="dynamic-module__inner">
              {elements.render({
                attrName: 'title',
              })}
              {elements.render({
                attrName: 'subtitle',
              })}
              <h4>View Type Checked:</h4>
              {
                console.log('Test - View Type Checked: ', viewType.sort().join(', '))
              }
              {
                map(viewType.sort(), (viewType) => (
                    <div>
                      {viewType}
                    </div>
                  )
                )
              }
              <br/>
              <h4>View Type 2 Selected:</h4>
              {viewType2.replace(/_/g, ' ')}
              <br/>
              <br/>
              <br/>
              <div className="dynamic-module__post-items">
                {
                  map(response, (post) => (
                      <div className="dynamic-module__post-item" key={post?.id}>
                        <PostTitleHeading className="dynamic-module__post-item-title">
                          <a href={post?.link} onClick={() => false}>{post?.title?.rendered}</a>
                        </PostTitleHeading>
                        <div className="dynamic-module__post-item-content" dangerouslySetInnerHTML={{__html: post?.excerpt?.rendered}} />
                      </div>
                    )
                  )
                }
              </div>
            </div>
          </>
        )
      }
      {
        ! isLoading && response.length < 1 && (
          <div>{__('No post found.', 'd5-extension-example-modules')}</div>
        )
      }
      {
        isLoading && (
          <div>{__('Loading...', 'd5-extension-example-modules')}</div>
        )
      }
    </ModuleContainer>
  );
}

export {
  DynamicModuleEdit,
};
