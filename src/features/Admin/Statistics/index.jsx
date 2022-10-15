import { Box, CircularProgress, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { DOB_MONTH } from '~/constants';
import DataTablePost from './components/DataTablePost';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';

const MOCK_DATA = {
  paddingX: '3rem',
  statistics: [
    {
      label: 'Today posts',
      percentage: 75,
      value: 20.4,
      helperText: 'We have percentage of this month',
      color: 'primeColor.darkPurple',
    },
    {
      label: 'Month posts',
      percentage: 50,
      value: 40.4,
      helperText: 'We have percentage of this year',
      color: 'red.400',
    },
    {
      label: 'Reports',
      percentage: 20,
      value: 20.4,
      helperText: 'We have percentage of this month',
      color: 'green.400',
    },
    {
      label: 'Today comments',
      percentage: 69,
      value: 20.4,
      helperText: 'We have percentage of this month',
      color: 'yellow.400',
    },
  ],
  lineChartData: {
    labels: DOB_MONTH,
    datasets: [
      {
        label: 'Quantity',
        data: [7, 3.5, 5.7, 11, 10, 12, 25],
        borderColor: 'rgb(254, 44, 85)',
        backgroundColor: 'rgba(254, 44, 85, 0.5)',
      },
    ],
  },
  donutChartData: {
    labels: ['Day', 'Month', 'Year'],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: ['rgb(254, 44, 85)', 'rgb(11, 224, 155)', 'rgb(67,56,202)'],
        borderColor: ['rgba(254, 44, 85, 0.5)', 'rgba(11, 224, 155, 0.5)', 'rgba(67,56,202,0.5)'],
        borderWidth: 1,
      },
    ],
  },
};

const AdStatisticPage = () => {
  const { statistics, paddingX, lineChartData, donutChartData } = MOCK_DATA;

  const [donutChartLabel, setDonutChartLabel] = useState();

  const renderStatistics = () =>
    statistics.map((item, idx) => (
      <Flex
        key={idx}
        align="center"
        justify="space-between"
        w="25%"
        border="1px solid rgba(22,24,35,0.12)"
        borderRadius="8px"
        p={`1.5rem ${paddingX}`}
      >
        <Box>
          <Text fontWeight={600} fontSize="1.8rem">
            {item.label}
          </Text>
          <Text fontWeight={700} fontSize="2.8rem" textTransform="uppercase">
            {`${item.value}k`}
          </Text>
          <Text fontSize="1.2rem" color="textColor.300">
            {item.helperText}
          </Text>
        </Box>

        <Box position="relative">
          <CircularProgress
            value={item.percentage}
            color={item.color}
            size="80px"
            thickness="6px"
          />
          <Text
            fontWeight={700}
            fontSize="1.6rem"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
            letterSpacing="1px"
          >
            {`${item.percentage}%`}
          </Text>
        </Box>
      </Flex>
    ));

  const handleDonutChartClick = ({ value }) => setDonutChartLabel(value);

  return (
    <Box p={paddingX} overflowY="overlay" h="100%">
      <Flex gap="2rem">{renderStatistics()}</Flex>

      {/* chart */}
      <Grid
        mt="2rem"
        gap="2rem"
        templateColumns="repeat(4, 1fr)"
        templateAreas={`"h1 h1 h1 h2"`}
        templateRows="40rem"
      >
        <GridItem area="h1">
          <Flex
            direction="column"
            border="1px solid rgba(22,24,35,0.12)"
            h="100%"
            p={`1.5rem ${paddingX}`}
            borderRadius="8px"
            gap="2rem"
          >
            <Text className="text" fontSize="1.8rem">
              Total Comments
            </Text>

            <Box position="relative" flex="1">
              <Box position="absolute" inset="0" w="100%" h="100%">
                <LineChart data={lineChartData} />
              </Box>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            direction="column"
            border="1px solid rgba(22,24,35,0.12)"
            h="100%"
            p={`1.5rem ${paddingX}`}
            borderRadius="8px"
            gap="2rem"
          >
            <Text className="text" fontSize="1.8rem">
              Total Reports
            </Text>

            <Box position="relative" flex="1">
              <Box position="absolute" inset="0" w="100%" h="100%">
                <DonutChart data={donutChartData} onClick={handleDonutChartClick} />
                <Flex
                  direction="column"
                  position="absolute"
                  top="45%"
                  left="50%"
                  transform="translate(-50%,-50%)"
                  justify="center"
                  align="center"
                  gap="0.5rem"
                >
                  <Text className="text" fontSize="3.6rem">
                    {donutChartLabel}
                  </Text>
                  <Text color="textColor.300">Total</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>

      {/* posts */}
      <DataTablePost paddingX={paddingX} />
    </Box>
  );
};

export default AdStatisticPage;
