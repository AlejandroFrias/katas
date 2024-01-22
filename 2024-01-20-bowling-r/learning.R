1:4

days <-  c(3, 4, 1, 0)
hours <- c(4, 9, 3, 2)

1:length(days)

for (index in 1:length(days)) {
  print(days[index] + hours[index])
}


calcMinutes <- function(days, hours, minutes) {
  (days * 24 * 60) + hours * 60 + minutes
}

days <- c(365, 3, 4, 5, 6, 4)
hours <- c(0, 1, 2, 3, 4, 5)
minutes <- c(0, 98, 2, 49, 30, 232)

calcMinutes(days, hours, minutes)

calcMinutes(365, 0, 0)

x <- -5:5
x
x < 0
x[x < 0]
x[x > 0]
x[x %% 2 == 1]

list1 <- list("a", "b", "c")
list2 <- list(1, 2, 3)
list3 <- c(list1,list2)

list3

list1
list1[1]

Data_Frame <- data.frame (
  Training = c("Strength", "Stamina", "Other"),
  Pulse = c(100, 150, 120),
  Duration = c(60, 30, 45)
)
Data_Frame

summary(Data_Frame)

Data_Frame[Data_Frame$Pulse > 110, ]

Data_Frame[2, 3]

Data_Frame[Data_Frame$Duration > 30, ]

