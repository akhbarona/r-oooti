import express from 'express';
import Order from '../models/orderModel.mjs';
import { isAuth, isAdmin } from '../util.mjs';
import expressAsyncHandler from 'express-async-handler';
const router = express.Router();



  router.post("/", isAuth, async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        totalPrice: req.body.totalPrice,
        items: req.body.items,
        shippingAddress: req.body.address,
    });
    const newOrderCreated = await newOrder.save();
    res.status(201).send({ message: "New Order Created", data: newOrderCreated });
  });

  router.get("/", isAuth, async (req, res) => {
    const orders = await Order.find({}).populate('user');
    res.send(orders);
  });

  router.delete("/:id", isAuth, isAdmin, async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
      const deletedOrder = await order.remove();
      res.send(deletedOrder);
    } else {
      res.status(404).send("Order Not Found.")
    }
  });

  router.get("/:id", isAuth, async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id });
    if (order) {
      res.send(order);
    } else {
      res.status(404).send("Order Not Found.")
    }
  });
  export default router;