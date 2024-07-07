// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
  SettingsProps,
} from '@divi/module';
import { GroupContainer } from '@divi/modal';
import {
  TextContainer,
  SelectContainer,
} from '@divi/field-library';
import { DynamicModuleAttrs } from './types';

export const SettingsContent = ({
  defaultSettingsAttrs,
}: SettingsProps<DynamicModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="posts"
      title={__('Posts', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__('Title', 'd5-extension-example-modules')}
        description={__('Title to show for module.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="subtitle.innerContent"
        label={__('Subtitle', 'd5-extension-example-modules')}
        description={__('Subtitle to show for module.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="postItems.innerContent"
        subName="postsNumber"
        label={__('Number of posts', 'd5-extension-example-modules')}
        description={__('Number of posts you want to show.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
          hover: false,
          responsive: false,
        }}
        defaultAttr={defaultSettingsAttrs?.postItems?.innerContent}
      >
        <TextContainer />
      </FieldContainer>
      <FieldContainer
        attrName="display_type.innerContent"
        label={__('Display Type', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{sticky: false}}
        defaultAttr={defaultSettingsAttrs?.display_type?.innerContent}
      >
        <SelectContainer
          options={
            {
              countdown_timer: {
                label: __('Standard', 'countdown-timer-maker'),
              },
              flip_timer: {
                label: __('Flip', 'countdown-timer-maker'),
              },
              circle_timer: {
                label: __('Circle', 'countdown-timer-maker'),
              },
              text_timer: {
                label: __('Text', 'countdown-timer-maker'),
              },
            }
          }
        />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup />
    <BackgroundGroup />
    <AdminLabelGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.meta?.adminLabel}
    />
  </React.Fragment>
);
