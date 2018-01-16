require 'faker'

20.times do
  Book.create(
    name: Faker::Book.title,
    author: Faker::Book.title,
    genre: Faker::Book.publisher,
    price: Faker::Commerce.price.to_f
  )
end

  User.create(
    email: 'admin@admin.com',
    password: 'password',
    admin: true
  )

