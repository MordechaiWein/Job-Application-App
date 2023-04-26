class User < ApplicationRecord
    has_secure_password

    validates :username, :image_url, :bio, presence: true
    validates :username, uniqueness: true
    validates :bio, length: {maximum: 150}
end
