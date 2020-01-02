class HomeController < ShopifyApp::AuthenticatedController
  def index
  	domain_name = ShopifyAPI::Shop.current.myshopify_domain
    # @products = ShopifyAPI::Product.find(:all, params: { limit: 10 })
    redirect_to "https://#{domain_name}"
  end
end
