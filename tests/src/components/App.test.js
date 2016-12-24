import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import App from '../../../src/components/App'

describe( 'App component', () => {
  const appWrapper = shallow( <App /> )

  it( 'can be snapshot', () => {
    const appSnapshot = renderer.create( <App /> ).toJSON()
    expect( appSnapshot ).toMatchSnapshot()
  })

  it( 'renders without crashing', () => {
    const appDiv = appWrapper.find( '.app' )
    expect( appDiv.type() ).toEqual( 'div' )
  })

})
