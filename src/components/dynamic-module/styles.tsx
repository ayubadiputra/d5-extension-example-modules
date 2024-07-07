// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  CommonStyle,
  DeclarationFunctionProps,
  StyleContainer,
  StylesProps,
  TextStyle,
} from '@divi/module';
import {
  getAttrByMode,
} from '@divi/module-utils';

// Local dependencies.
import { DynamicModuleAttrs } from './types';

/**
 * Dynamic Module's style components.
 *
 * @since ??
 */
 const ModuleStyles = ({
  settings,
  mode,
  state,
  noStyleTag,
  elements,
  attrs,
  orderClass,
}: StylesProps<DynamicModuleAttrs>): ReactElement => {
  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={`${orderClass} .dynamic-module__inner`}
        attr={attrs?.module?.advanced?.text}
      />
      {elements.style({
        attrName: 'title',
      })}
      {elements.style({
        attrName: 'subtitle',
      })}
      {elements.style({
        attrName: 'postTitle',
      })}
<CommonStyle
  selector={`${orderClass} .test-image`}
  attr={attrs?.image?.decoration?.position}
  declarationFunction={(
    { attrValue }: DeclarationFunctionProps<{x?: string; y?: string}>
  ): string => {
    // Value: {x: '7px', y: '20px'}
    return `object-position: ${attrValue?.x} ${attrValue?.y};`;
  }}
/>
    </StyleContainer>
  );
}

export {
  ModuleStyles,
};
