path = require 'path'

ApplicationRoot = require '../ApplicationRoot.coffee'

csvDir = 'public/CSV'

DatasetFiles = 

  jan2016: 
    energyDemand: path.join(ApplicationRoot, csvDir, '2016-01_EnergyDemand.csv')
    oilProduction: path.join(ApplicationRoot, csvDir, '2016-01_CrudeOilProduction.csv')
    electricityGeneration: path.join(ApplicationRoot, csvDir, '2016-01_ElectricityGeneration.csv')
    gasProduction: path.join(ApplicationRoot, csvDir, '2016-01_NaturalGasProduction.csv')

  oct2016: 
    energyDemand: path.join(ApplicationRoot, csvDir, '2016-10-18_EnergyDemand.csv')
    oilProduction: path.join(ApplicationRoot, csvDir, '2016-10-18_CrudeOilProduction.csv')
    electricityGeneration: path.join(ApplicationRoot, csvDir, '2016-10-27_ElectricityGeneration.csv')
    gasProduction: path.join(ApplicationRoot, csvDir, '2016-10-18_NaturalGasProduction.csv')


module.exports = DatasetFiles