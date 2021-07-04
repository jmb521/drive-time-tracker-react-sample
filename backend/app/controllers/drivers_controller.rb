class DriversController < ApplicationController

    def create
        driver = Driver.new(driver_params)
        if driver.save
            render json: driver
        else
            render json: {
                error: driver.errors.full_messages
            }
        end
    end

    

    private

    def driver_params
        params.require(:driver).permit(:first_name, :last_name)
    end
end
