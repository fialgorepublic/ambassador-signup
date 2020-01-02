ShopifyApp.configure do |config|
  config.application_name = "signup test"
  config.api_key = "00b57aae9dc9b806b2a97c107abddb78"
  config.secret = "abb0cfcb0ac48f654df36cd8bd682b94"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://popup.saintlbeau.com/custom.js'}
  ]
end
