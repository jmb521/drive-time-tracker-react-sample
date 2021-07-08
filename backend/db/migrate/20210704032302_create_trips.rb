class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :weather
      t.datetime :start_time
      t.datetime :end_time
      t.string :time_of_day
      t.belongs_to :driver
      t.timestamps
    end
  end
end
