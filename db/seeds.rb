# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  User.create(
  first_name: Faker::Name.first_name, 
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  company: Faker::Company.name,
  password: "password",
  password_confirmation: "password",
  admin: false
  )
end

Product.create(
  collection: 'Fall 2015',
  category: 'Tops',
  style: 'Fancy Top',
  style_num: 'D53#21',
  color: 'red',
  description: "It's a fancy top for fancy occasions"
  )

Product.create(
  collection: 'Fall 2015',
  category: 'Pants',
  style: 'Classic Pants',
  style_num: 'D56#21',
  color: 'blue',
  description: "So classy. So you."
  )

Product.create(
  collection: 'Fall 2015',
  category: 'Pants',
  style: 'Modern Pants',
  style_num: 'D56#21',
  color: 'black',
  description: "So classy. So you."
  )

Product.create(
  collection: 'Fall 2015',
  category: 'Skirts',
  style: 'Summer Skirt',
  style_num: 'D53#14',
  color: 'floral',
  description: "Perfect for when its hot!"
  )

Product.create(
  collection: 'Fall 2015',
  category: 'Skirts',
  style: 'Short Skirt',
  style_num: 'D53#14',
  color: 'floral',
  description: "Show some leg. Ooh lala."
  )

Product.create(
  collection: 'Fall 2015',
  category: 'Dresses',
  style: 'Floral Dress',
  style_num: 'D53#31',
  color: 'floral',
  description: "Dress to impress"
  )