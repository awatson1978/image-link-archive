////////// Lists //////////

Template.lists.helpers({
  lists: function(){
    return Lists.find({}, {sort: {name: 1}});
  },
  selected: function () {
    return Session.equals('list_id', this._id) ? 'selected' : '';
  },
  name_class: function () {
    return this.name ? '' : 'empty';
  },
  editing: function () {
    return Session.equals('editing_listname', this._id);
  }
});



Template.lists.events({
    'mousedown .list': function (evt) { // select list
        Router.setList(this._id);
    },
    'click .list': function (evt) {
        // prevent clicks on <a> from refreshing the page.
        evt.preventDefault();
    },
    'dblclick .list': function (evt, tmpl) { // start editing list name
        Session.set('editing_listname', this._id);
        Meteor.flush(); // force DOM redraw, so we can focus the edit field
        activateInput(tmpl.find("#list-name-input"));
    }
});

// Attach events to keydown, keyup, and blur on "New list" input box.
Template.lists.events(okCancelEvents('#new-list',{
    ok: function (text, evt) {
        var id = Lists.insert({name: text});
        Router.setList(id);
        evt.target.value = "";
    }
}));

Template.lists.events(okCancelEvents('#list-name-input',{
    ok: function (value) {
        Lists.update(this._id, {$set: {name: value}});
        Session.set('editing_listname', null);
    },
    cancel: function () {
        Session.set('editing_listname', null);
    }
}));
