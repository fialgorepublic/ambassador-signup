ShopifyApp.configure do |config|
  config.application_name = "signup test"
  config.api_key = "331cb584654d6d2c9a6334de943c17c9"
  config.secret = "11a06c64579d575516b8e0519ce8688f"
  config.scope = "read_orders, read_products, write_script_tags"
  config.embedded_app = true
  config.scripttags = [
  {event:'onload', src: 'https://popup.saintlbeau.com/custom.js'}
  ]
end
