'use strict';

// Dependencies.
import interact from 'interact.js';
import Grid from '../helpers/grid.js';

export default {
  bind: function (element, binding, vnode) {
    interact(element).dropzone({
      ondragenter: function () {
        element.classList.add('droppable');
      },
      ondragleave: function () {
        element.classList.remove('droppable');
      },
      ondrop: function (event) {
        // Convert moved pixels to change in timestamp.
        let change = Math.round(event.dragEvent.dx / vnode.context.$root.$el.clientWidth * vnode.context.$store.getters['duration']);

        // Create copy if ALT key is pressed, otherwise edit existing.
        if (event.dragEvent.altKey) {
          // Add new booking to store.
          vnode.context.$store.dispatch('bookings/create', {
            object: vnode.context.id,
            start: event.relatedTarget.__vue__.start + change,
            end: event.relatedTarget.__vue__.end + change
          });
        } else {
          // Commit changes of existing booking to store.
          vnode.context.$store.commit('bookings/update', {
            id: event.relatedTarget.__vue__.id,
            object: vnode.context.id,
            start: event.relatedTarget.__vue__.start + change,
            end: event.relatedTarget.__vue__.end + change
          });
        }

        element.classList.remove('droppable');
      }
    }).on('doubletap', function (event) {
      let position = Math.round(event.offsetX / vnode.context.$root.$el.clientWidth * vnode.context.$store.getters['duration']);
      let stepSize = vnode.context.$store.getters['duration'] / vnode.context.$store.state.steps;
      let start = Grid.round(position + vnode.context.$store.state.start, vnode.context.$store.getters['duration'], vnode.context.$store.state.steps);

      // Add new booking to store.
      vnode.context.$store.dispatch('bookings/create', {
        object: vnode.context.id,
        start: start,
        end: start + stepSize * 2
      });
    });
  },
  unbind: function (element) {
    interact(element).unset();
  }
};
