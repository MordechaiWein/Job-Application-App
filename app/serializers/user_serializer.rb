class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :image_url, :admin, :bio

  has_many :applications
end
