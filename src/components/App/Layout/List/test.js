import React from 'react'
import test from 'ava'
import $ from 'teaspoon'
import List from './List'

const props = {

}

test.beforeEach(t => {
  t.context = $(<List {...props} />).shallowRender()
})

test('', t => {

})
