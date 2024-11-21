const mongoose = require("mongoose");

    const orderItemSchema =  mongoose.Schema({
        name: { type: String, required: true },
        image: { type: String, required: true },
        slug: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: String, required: true },
        countInStock: { type: Number, required: true, default: 0 },
        rating: { type: Number, required: true, default: 0 },
        numReview: { type: Number, required: true, default: 0 },
        description: { type: String, required: true },
        location: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      });
      
      const orderSchema = new mongoose.Schema(
        {
          user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
          orderItems: [orderItemSchema],
          shippingAddress: {
            address: { type: String, required: true },
            city: { type: String, required: true },
            postalCode: { type: String, required: true },
            country: { type: String, required: true },
          },
          paymentMethod: { type: String, required: true, default: "Paypal" },
          paymentResult: {
            id: { type: String },
            status: { type: String },
            updated_time: { type: String },
            email_address: { type: String },
          },
          shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
          },
          totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
          },
          isPaid: {
            type: Boolean,
            required: true,
            default: false,
          },
          paidAt: {
            type: Date,
          },
          isDelivered: {
            type: Boolean,
            required: true,
            default: false,
          },
          deliveredAt: {
            type: Date,
          },
        },
        { timestamps: true }
      );
      
      
      module.exports = mongoose.model("Order", orderSchema)
