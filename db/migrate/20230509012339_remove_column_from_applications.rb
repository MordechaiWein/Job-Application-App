class RemoveColumnFromApplications < ActiveRecord::Migration[6.1]
  def change
    remove_column :applications, :application_name, :string
  end
end
