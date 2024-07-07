// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  IdClassesGroupAttr,
  InternalAttrs,
  LinkGroupAttr,
  TextGroupAttr,
  PickedElementDecorationAttrs,
  ModuleMetaAttrs,
} from '@divi/types';

export interface DynamicModuleAttrs extends InternalAttrs {
  module?: {
    meta?: ModuleMetaAttrs;
    advanced?: {
      link?: LinkGroupAttr;
      htmlAttributes?: IdClassesGroupAttr;
      text?: TextGroupAttr;
    };
    decoration?: PickedElementDecorationAttrs<
      'animation' |
      'background' |
      'border' |
      'boxShadow' |
      'disabledOn' |
      'filters' |
      'overflow' |
      'position' |
      'scroll' |
      'sizing' |
      'spacing' |
      'sticky' |
      'transform' |
      'transition' |
      'zIndex'
    >;
  };
  title?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'font'>;
  };
  subtitle?: {
    innerContent?: FormatBreakpointStateAttr<string>;
    decoration?: PickedElementDecorationAttrs<'font'>;
  };
  postItems?: {
    innerContent?: FormatBreakpointStateAttr<{
      postsNumber?:string;
    }>;
  };
  postTitle?: {
    decoration?: PickedElementDecorationAttrs<'font'>;
  };
  display_type?: {
    innerContent?: FormatBreakpointStateAttr<{
      postsNumber?:string;
    }>;
  };
  tblStripes?: {
    advanced?: {
      applyTo?: FormatBreakpointStateAttr<[]>;
    };
  };
  tblStripes2?: {
    advanced?: {
      applyTo?: FormatBreakpointStateAttr<''>;
    };
  };
  image?: {
    decoration?: {
      spacing?: {
        padding?: FormatBreakpointStateAttr<{
          top?:string;
          right?:string;
          bottom?:string;
          left?:string;
        }>;
      };
      position?: FormatBreakpointStateAttr<{
        x?:string;
        y?:string;
      }>;
    };
  };
}

export type DynamicModuleEditProps = ModuleEditProps<DynamicModuleAttrs>;