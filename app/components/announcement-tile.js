import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if (confirm('Are you sure you want to delete this announcement?... no but seriously?... you sure?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
