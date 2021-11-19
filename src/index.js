import { registerFormatType, toggleFormat } from '@wordpress/rich-text'
import { BlockControls } from '@wordpress/block-editor'
import { ToolbarButton, Toolbar } from '@wordpress/components'
import { useSelect } from '@wordpress/data'

import './index.css'

function ConditionalButton (props) {

  const selectedBlock = useSelect((select) => {
    return select('core/block-editor').getSelectedBlock()
  }, [])

  if (selectedBlock && selectedBlock.name !== 'core/paragraph') {
    return null
  }

  return (
    <>
      <BlockControls>
        <Toolbar>
          <ToolbarButton
            icon="editor-justify"
            label="Justify"
            className="components-toolbar__control"
            onClick={() =>
              props.onChange(
                toggleFormat(props.value, {
                  type: 'text-justify-format/output',
                }),
              )}
            isActive={props.isActive}
          />
        </Toolbar>
      </BlockControls>
    </>
  )
}

registerFormatType('text-justify-format/output', {
  title: 'Justify',
  tagName: 'span',
  className: 'has-text-align-justify',
  edit: ConditionalButton,
})
