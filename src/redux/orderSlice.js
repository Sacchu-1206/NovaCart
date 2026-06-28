import { createSlice } from "@reduxjs/toolkit";

const loadOrders = () => {
  const data = localStorage.getItem("orders");
  return data ? JSON.parse(data) : [];
};

const saveOrders = (orders) => {
  localStorage.setItem("orders", JSON.stringify(orders));
};

const initialState = {
  orders: loadOrders(),
};

const orderSlice = createSlice({
  name: "orders",

  initialState,

  reducers: {
    placeOrder: (state, action) => {
      state.orders.unshift(action.payload);

      saveOrders(state.orders);
    },

    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;

      const order = state.orders.find(
        (item) => item.orderId === orderId
      );

      if (order) {
        order.status = status;
      }

      saveOrders(state.orders);
    },

    clearOrders: (state) => {
      state.orders = [];

      saveOrders(state.orders);
    },
  },
});

export const {
  placeOrder,
  updateOrderStatus,
  clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;