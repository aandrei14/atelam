nubmerOfIPHolders = int(input('The number of IP holders is... '))

ipHoldersInfluenceScore = list()

totalInfluenceScore = 0
for i in range(nubmerOfIPHolders):
    ipHoldersInfluenceScore.append(int(input('The influence of the IP holder number ' + str(i+1) + ' is... ')))
    totalInfluenceScore += ipHoldersInfluenceScore[i]

originalIPInfluenceScore = int(input('Now, the original IP influence is... '))
totalInfluenceScore += originalIPInfluenceScore
originalIPInfluenceWeight = originalIPInfluenceScore / totalInfluenceScore

ipHoldersInfluenceWeight = list()
for i in range(nubmerOfIPHolders):
    ipHoldersInfluenceWeight.append(ipHoldersInfluenceScore[i]/totalInfluenceScore)

ipHoldersRevenueDesire = list()
for i in range(nubmerOfIPHolders):
    ipHoldersRevenueDesire.append(float(input('The IP holder number ' + str(i+1) + ' revenue desire is... ')))

totalRevenueMade = int(input('The project\'s revenue is... '))

ipHoldersActualRevenue = list()
projectPublisherActualRevenue = totalRevenueMade
for i in range(nubmerOfIPHolders):
    ipHoldersActualRevenue.append(totalRevenueMade * ipHoldersInfluenceWeight[i] * ipHoldersRevenueDesire[i])
    projectPublisherActualRevenue -= ipHoldersActualRevenue[i]

print(ipHoldersActualRevenue)
print(projectPublisherActualRevenue)