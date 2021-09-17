import todo from "./../../models/todo.js";

class controllerTodo {
  async get(req, res) {
    try {
      const tododata = await todo.find();

      console.log(tododata);
      return res.json(tododata);
    } catch (error) {
      console.error(error);
    }
  }
  async postitem(req, res) {
    const todoitem = req.body.todo;
    console.log("post item");
    console.log(req.body.todo);
    try {
      const newTodo = new todo({
        todo: todoitem,
      });
      await newTodo.save();
      res.send("saved");
    } catch (error) {
      console.error(error);
    }
  }
  async deleteitem(req, res) {
    const id = req.params.id;

    try {
      await todo.findByIdAndDelete(id);
      res.send("deleted");
    } catch (error) {
      console.error(error);
    }
  }
  async updateitem(req, res) {
    const id = req.params.id;
    const updated = req.body.todo;

    try {
      const newData = await todo.findByIdAndUpdate(id, {
        todo: updated,
      });
      newData.save();
      res.send("updated");
    } catch (error) {
      console.error(error);
    }
  }
}

export default new controllerTodo();
