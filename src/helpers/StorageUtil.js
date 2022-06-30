const StorageKeys = {
      cart: 'cart'
};

const StorageUtil = {
      cartStorage: () => {
            const data = localStorage.getItem(StorageKeys.cart);
            return data ? JSON.parse(data) : [];
      },

      updateCart: (data = []) => {
            localStorage.setItem(StorageKeys.cart, JSON.stringify(data));
      }
};

export const cartStorage = StorageUtil.cartStorage;
export const updateCart = StorageUtil.updateCart;