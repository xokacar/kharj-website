/* eslint-disable @typescript-eslint/ban-types */
// React
import { PropsWithChildren } from 'react';

// Chakra UI
import { VStack, Container } from '@chakra-ui/react';

// Components
import { Footer } from '../footer/footer';

type Props = PropsWithChildren<{}>;

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Container
				display='flex'
				maxW='container.md'
				minH={{ base: 'auto', md: '100vh' }}
				px={{ base: 4, lg: 0 }}
				centerContent
			>
				<VStack alignItems='stretch' flex={1} w='full' spacing={16}>
					<VStack as='main' flex={1} w='full' spacing={16}>
						{children}
					</VStack>
					<Footer />
				</VStack>
			</Container>
		</>
	);
};
