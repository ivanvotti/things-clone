import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  filteredTasks: computed(
    'model.tasks.[]',
    'model.tasks.@each.{isCompleted,isAnytime,isDeleted}',
    function() {
      return this.model.tasks.filter(
        task => task.isAnytime && !task.isCompleted && !task.isDeleted
      );
    }
  ),

  tasks: computed('filteredTasks.{[],@each.order}', function() {
    return this.filteredTasks.sortBy('order');
  })
});