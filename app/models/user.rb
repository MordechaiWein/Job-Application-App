class User < ApplicationRecord
    has_secure_password

    has_many :applications, dependent: :destroy
    has_many :jobs, through: :applications

    validates :username, :image_url, :bio, presence: true
    validates :username, uniqueness: true
    validates :bio, length: {maximum: 150}
end
