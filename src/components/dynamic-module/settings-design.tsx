// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  CheckboxesContainer,
  RangeContainer,
  SpacingContainer,
  SelectContainer,
} from '@divi/field-library';
import { FieldWrapper, GroupContainer } from '@divi/modal';
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FieldContainer,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
  SettingsProps,
} from '@divi/module';
import { DynamicModuleAttrs } from './types';


export const SettingsDesign = ({
  defaultSettingsAttrs,
}: SettingsProps<DynamicModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer id="imageStyle" title={__('Image Style', 'd5-extension-example-modules')}>
      <SpacingGroup
        grouped={false}
        attrName="image.decoration.spacing"
        fields={{
          margin:  {
            render: false,
          },
          padding: {
            defaultAttr: {
              desktop: {
                value: {
                  margin: {
                    top:    '50px',
                    bottom: '50px',
                    left:   '50px',
                    right:  '50px',
                  },
                },
              },
            },
          },
        }}
      />
      <FieldContainer
        attrName="image.decoration.position"
        subName="x"
        label={__('Image X', 'd5-extension-example-modules')}
        description={__('Image position x.', 'd5-extension-example-modules')}
        defaultAttr="0"
      >
        <RangeContainer />
      </FieldContainer>
      <FieldContainer
        attrName="image.decoration.position"
        subName="y"
        label={__('Image Y', 'd5-extension-example-modules')}
        description={__('Image position y.', 'd5-extension-example-modules')}
        defaultAttr="0"
      >
        <RangeContainer />
      </FieldContainer>
      <FieldContainer
        label={__('Stripes: Apply To', 'dvmd-table-maker')}
        attrName="tblStripes.advanced.applyTo"
        defaultAttr={defaultSettingsAttrs?.tblStripes?.advanced?.applyTo}
        description={__('Image position y.', 'd5-extension-example-modules')}
        features={{
          responsive: false,
          hover: false,
          sticky: false,
        }}
      >
        <CheckboxesContainer
          options={[
            {
               value: 'Column Footer',
              label: __('Column Footer', 'dvmd-table-maker'),
            },
            {
              value: 'Column Header',
              label: __('Column Header', 'dvmd-table-maker'),
            },
            {
              value: 'Row Footer',
              label: __('Row Footer', 'dvmd-table-maker'),
            },
            {
              value: 'Row Header',
              label: __('Row Header', 'dvmd-table-maker'),
            },
            {
              value: 'Table Body',
              label: __('Table Body', 'dvmd-table-maker'),
            },
          ]}
        />
      </FieldContainer>
      <FieldContainer
        label={__('Stripes 2: Apply To', 'dvmd-table-maker')}
        attrName="tblStripes2.advanced.applyTo"
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{sticky: false}}
        defaultAttr={defaultSettingsAttrs?.tblStripes2?.advanced?.applyTo}
      >
        <SelectContainer
          options={{
            column_footer : {
              label: __('Column Footer', 'dvmd-table-maker'),
            },
            column_header : {
              label: __('Column Header', 'dvmd-table-maker'),
            },
            row_footer : {
              label: __('Row Footer', 'dvmd-table-maker'),
            },
            row_header : {
              label: __('Row Header', 'dvmd-table-maker'),
            },
            table_body : {
              label: __('Table Body', 'dvmd-table-maker'),
            },
          }}
        />
      </FieldContainer>
    </GroupContainer>
    <TextGroup />
    <FontGroup
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="title.decoration.font"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      defaultGroupAttr={defaultSettingsAttrs?.title?.decoration?.font?.asMutable({ deep: true }) ?? {}}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
    />
    <FontGroup
      groupLabel={__('Subtitle Text', 'd5-extension-example-modules')}
      attrName="subtitle.decoration.font"
      fieldLabel={__('Subtitle', 'd5-extension-example-modules')}
      defaultGroupAttr={defaultSettingsAttrs?.subtitle?.decoration?.font?.asMutable({ deep: true }) ?? {}}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
    />
    <FontGroup
      groupLabel={__('Post Title Text', 'd5-extension-example-modules')}
      attrName="postTitle.decoration.font"
      fieldLabel={__('Post Title', 'd5-extension-example-modules')}
      fields={{
        headingLevel: {
          render: true,
        },
      }}
      defaultGroupAttr={defaultSettingsAttrs?.postTitle?.decoration?.font?.asMutable({ deep: true }) ?? {}}
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
