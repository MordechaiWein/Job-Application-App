class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :age, :work_experience, :user_id, :job_id, :phone_number, :email_address

  belongs_to :job
end
