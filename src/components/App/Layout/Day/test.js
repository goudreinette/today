import React from 'react'
import test from 'ava'
import $ from 'teaspoon'
import Day from './Day'

const props = {
  date: new Date(1997, 11, 25),
  text: 'Notes here',
  list: {
      label: '',
      position: 0,
      cards: [
        {label: 'Card', position: 0, done: new Date()},
        {label: 'Other', position: 1, done: new Date()},
        {label: 'Walk Dog', position: 2, done: new Date()}
      ]
  }
}

test.beforeEach(t => {
  t.context = $(<Day {...props} />).shallowRender()
})

test('shows the given date', t => {
  t.true(t.context.text().includes('25'))
  t.true(t.context.text().includes('December'))
  t.true(t.context.text().includes('1997'))
})

test('shows the given text', t => {
  t.true(t.context.text().includes(props.text))
})

test('shows a list of cards', t => {
  t.is(t.context.find('.list').length, 1)
  t.is(t.context.find('.list .card').length, props.list.cards.length)
})
