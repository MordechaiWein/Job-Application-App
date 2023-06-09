class AddNewColumnToApplications < ActiveRecord::Migration[6.1]
  def change
    add_column :applications, :work_experience, :string
  end
end
