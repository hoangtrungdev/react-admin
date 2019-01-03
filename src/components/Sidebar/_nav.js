export default {
  items: [
    {
      name: 'First Demo',
      url: '/admin/first-demo',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'Demo'
      }
    },
    {
      name: 'Product',
      url: '/admin/product',
      icon: 'fa fa-cubes',
      children: [
        {
          name: 'List',
          url: '/admin/product-list',
          icon: 'fa fa-list'
        }
      ]
    }

  ]
};
