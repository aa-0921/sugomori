# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do |n|
  User.create(name: "#{n + 1}-name", email: "#{n + 1}@example.com")
end

20.times do |n|
  Post.create(content: "#{n + 1}-post")
end

# User.create!(
#   [
#     {
#       name: 'Mary'
#     },
#     {
#       name: 'Alice'
#     },
#     {
#       name: 'John'
#     }
#   ]
# )

# Post.create!(
#   [
#     {
#       content: '勉強'
#     },
#     {
#       content: '映画鑑賞'
#     },
#     {
#       content: '掃除'
#     }
#   ]
# )
