const api = {
  hostname: 'https://hyperushle.com/api',
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
  async queryCoupon(jwtToken) {
    const response = await fetch(`${this.hostname}/cart/coupon`, {
      headers: new Headers({
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response.json();
  },
  async getStraw(data) {
    const response = await fetch(`${this.hostname}/front/divination`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    });
    return await response.json();
  },
  async claimCoupon(data, jwtToken) {
    const response = await fetch(`${this.hostname}/coupon`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: 'POST',
    });

    const res = {data: response.json(), status: response.status};

    return await res;
  },
  async getBotMessage(type){
    const response = await fetch(`${this.hostname}/front/chatbox`,{
      body: JSON.stringify(type),
      headers: new Headers({
        'Content-Type' : 'application/json',
      }),
      method: 'POST'
    })

    console.log(await response.json())
  }
};

export default api;
