import React from 'react'
import { Container, Header, Button, Form, TextArea, Label } from 'semantic-ui-react'

const options = [
  { key: 'n', text: 'Nails', value: 'Nails' },
  { key: 'l', text: 'Lips', value: 'Lips' },
  { key: 'f', text: 'Face', value: 'Face' },
  { key: 'm', text: 'Mascara', value: 'Mascara' },
  { key: 'e', text: 'Eyes', value: 'Eyes' },
  { key: 'b', text: 'Brows', value: 'Brows' },
  { key: 'c', text: 'Cheeks', value: 'Cheeks' },
  { key: 'mi', text: 'Misc', value: 'Misc' },
]


const AddForm = () => (
  <Container text>
    <Header as='h1' content='Add a Product' textAlign='center' />
    <Form verticalAlign='middle' >
      <Form.Select options={options} placeholder='Select a Product Category' />
      <Form.Field>
        <label>Brand</label>
        <input placeholder='Brand' />
      </Form.Field>
      <Form.Field>
        <label>Product Name</label>
        <input placeholder='Product Name' />
      </Form.Field>
      <Form.Field>
        <label>Color</label>
        <input placeholder='Color' />
      </Form.Field>
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='Notes'
      />
      <Label as="label" basic htmlFor="upload">
        <Button icon="upload"
          label={{
            basic: true,
            content: 'Select photo'
          }}
          labelPosition="right"
        />
        <input hidden id="upload" multiple type="file"/>
      </Label>

      <Button type='submit'>Submit</Button>
    </Form>
  </Container>
)

export default AddForm