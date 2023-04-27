class RemoveColumnFromApplication < ActiveRecord::Migration[6.1]
  def change
    remove_column :applications, :applicataion_name
  end
end
