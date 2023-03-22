import BaseControl from '../../assets/components/base-control';
import useBlockControlProps from '../../assets/hooks/use-block-control-props';

import TMCE from './tmce';

const { addFilter } = wp.hooks;

/**
 * Control render in editor.
 */
addFilter('lzb.editor.control.classic_editor.render', 'lzb.editor', (render, props, blockProps) => {
  const uniqueKey = `${props.placement}-${blockProps.clientId}-${props.uniqueId}-${
    props.data.name
  }-${props.childIndex || 0}`;

  return (
    <BaseControl key={uniqueKey} {...useBlockControlProps(props)}>
      <TMCE
        content={props.getValue()}
        onChange={(val) => {
          props.onChange(val);
        }}
        editorId={uniqueKey}
      />
    </BaseControl>
  );
});
