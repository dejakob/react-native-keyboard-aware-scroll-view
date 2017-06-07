/* @flow */

import React, { PropTypes } from 'react'
import { Animated, ScrollView } from 'react-native'
import KeyboardAwareMixin from './KeyboardAwareMixin'

const AnimatedKeyboardAwareScrollView = React.createClass({
  propTypes: {
    ...ScrollView.propTypes,
    viewIsInsideTabBar: PropTypes.bool,
    resetScrollToCoords: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  },
  mixins: [KeyboardAwareMixin],

  componentWillMount: function () {
    this.setViewIsInsideTabBar(this.props.viewIsInsideTabBar)
    this.setResetScrollToCoords(this.props.resetScrollToCoords)
  },

  render: function () {
    return (
      <Animated.ScrollView
        ref='_rnkasv_keyboardView'
        keyboardDismissMode='interactive'
        contentInset={{bottom: this.state.keyboardSpace}}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={0}
        {...this.props}
        onScroll={this.props.createScrollHandler(this.handleOnScroll)}
        >
        {this.props.children}
      </Animated.ScrollView>
    )
  },
})

export default AnimatedKeyboardAwareScrollView
