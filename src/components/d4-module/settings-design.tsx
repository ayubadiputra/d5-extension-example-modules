// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
  SettingsProps,
} from '@divi/module';

// Local dependencies.
import { D4ModuleAttrs } from './types';

export const SettingsDesign = ({
  defaultSettingsAttrs,
}: SettingsProps<D4ModuleAttrs>): ReactElement => (
  <React.Fragment>
    <TextGroup />
    <FontGroup
      groupLabel={__('Title Text 123', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title 123', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
    />
    <FontBodyGroup />
    <SizingGroup />
    <SpacingGroup />
    <BorderGroup />
    <BoxShadowGroup />
    <FiltersGroup />
    <TransformGroup />
    <AnimationGroup />
  </React.Fragment>
);
