const api = {
  hostname: 'https://api.appworks-school.tw/api/1.0',
  hostnameByBackend: 'http://54.153.203.119/api/1.0',
  backendAccessToken: 'x48aDD534da8ADSD1XC4SD5S',
  async getProducts(category, paging) {
    const response = await fetch(
      `${this.hostname}/products/${category}?paging=${paging}`,
    );
    return await response.json();
  },
  async getCampaigns() {
    const response = await fetch(`${this.hostname}/marketing/campaigns`);
    return await response.json();
  },
  async searchProducts(keyword, paging) {
    const response = await fetch(
      `${this.hostname}/products/search?keyword=${keyword}&paging=${paging}`,
    );
    return await response.json();
  },
  async getProduct(id) {
    const response = await fetch(`${this.hostname}/products/details?id=${id}`);
    return await response.json();
  },
  async checkout(data, jwtToken) {
    const response = await fetch(`${this.hostname}/order/checkout`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: 'POST',
    });
    return await response.json();
  },
  async signin(data) {
    const response = await fetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    });
    return await response.json();
  },
  async getProfile(jwtToken) {
    const response = await fetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response.json();
  },

  async getCoupon() {
    const response = await fetch(`${this.hostnameByBackend}/cart/coupon`, {
      headers: new Headers({
        Authorization: `Bearer ${this.backendAccessToken}`,
      }),
    });
    return await response.json();
  },
  async getStraw() {
    const response = await fetch(`${this.hostnameByBackend}/front/divination`, { 
      headers: new Headers({
      }),
      method: "POST",
    });
    return await response.json()
  }
};

export default api;
