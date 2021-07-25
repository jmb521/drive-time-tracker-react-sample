class User < ApplicationRecord
    has_many :drivers


    def self.from_omniauth(auth)
        binding.irb
        user = User.first_or_initialize(email: auth["email"]) do |u|
            u.username = auth["name"]

        end
        user.save
        user

    end

end
# this method doesn't need a uid