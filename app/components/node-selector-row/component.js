import Component from '@ember/component';
import { computed } from '@ember/object'
import layout from './template';
import C from 'ui/utils/constants';

export default Component.extend({
  layout,
  tagName:         'TR',
  rule:            null,
  editing:         true,
  isJustLabel: computed('rule.operator', function() {

    return ['Exists', 'DoesNotExist'].includes(this.get('rule.operator'));

  }),

  isMultiple: computed('rule.operator', function() {

    return ['In', 'NotIn'].includes(this.get('rule.operator'));

  }),
  actions: {
    removeRule() {

      this.sendAction('remove', this.get('rule'));

    },
  },

  operatorChoices: C.SCHED_NODE_SELECTOR_OPERATOR,

})
