class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_description, :pay, :applications

  has_many :users
end





 
