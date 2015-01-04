////////// Todos //////////

Template.todos.helpers({
  any_list_selected: function(){
    return !Session.equals('list_id', null);
  },
  todos: function () {
    // Determine which todos to display in main pane,
    // selected based on list_id and tag_filter.

    var list_id = Session.get('list_id');
    if (!list_id)
      return {};

      var sel = {list_id: list_id};
      var tag_filter = Session.get('tag_filter');
      if (tag_filter)
        sel.tags = tag_filter;

        return Todos.find(sel, {sort: {timestamp: 1}});
  },
});




Template.todos.events(okCancelEvents('#new-todo',{
    ok: function (text, evt) {
        var tag = Session.get('tag_filter');
        Todos.insert({
            text: text,
            list_id: Session.get('list_id'),
            done: false,
            timestamp: (new Date()).getTime(),
            tags: tag ? [tag] : []
        });
        evt.target.value = '';
    }
}));




Template.todo_item.helpers({
  tag_objs: function(){
    var todo_id = this._id;
    return _.map(this.tags || [], function (tag) {
      return {todo_id: todo_id, tag: tag};
    });
  },
  done_class: function () {
    return this.done ? 'done' : '';
  },
  done_checkbox: function () {
    return this.done;
  },
  editing: function () {
    return Session.equals('editing_itemname', this._id);
  },
  adding_tag: function () {
    return Session.equals('editing_addtag', this._id);
  },
});






Template.todo_item.events({
    'click .check': function () {
        Todos.update(this._id, {$set: {done: !this.done}});
    },

    'click .destroy': function () {
        Todos.remove(this._id);
    },

    'click .addtag': function (evt, tmpl) {
        Session.set('editing_addtag', this._id);
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#edittag-input"));
    },

    'dblclick .display .todo-text': function (evt, tmpl) {
        Session.set('editing_itemname', this._id);
        Meteor.flush(); // update DOM before focus
        activateInput(tmpl.find("#todo-input"));
    },

    'click .remove': function (evt) {
        var tag = this.tag;
        var id = this.todo_id;

        evt.target.parentNode.style.opacity = 0;
        // wait for CSS animation to finish
        Meteor.setTimeout(function () {
            Todos.update({_id: id}, {$pull: {tags: tag}});
        }, 300);
    }
});

Template.todo_item.events(okCancelEvents(
    '#todo-input',
    {
        ok: function (value) {
            Todos.update(this._id, {$set: {text: value}});
            Session.set('editing_itemname', null);
        },
        cancel: function () {
            Session.set('editing_itemname', null);
        }
    }));

Template.todo_item.events(okCancelEvents(
    '#edittag-input',
    {
        ok: function (value) {
            Todos.update(this._id, {$addToSet: {tags: value}});
            Session.set('editing_addtag', null);
        },
        cancel: function () {
            Session.set('editing_addtag', null);
        }
    }));
