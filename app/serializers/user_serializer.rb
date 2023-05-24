class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :admin, :bio

  has_many :applications
end