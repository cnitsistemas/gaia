import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Privacy() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                A CNIT - COMPANHIA NACIONAL DE INFRAESTRUTURA DE TRANSPORTE aceitou o desafio de ser a Primeira e Única Empresa de Transporte Escolar da
                Amazônia a utilizar um aplicativo na internet, para facilitar a vida de seus usuários, através da localização de seus veículos, em tempo real,
                quando em serviço.
            </Text>
            <Text style={styles.text}>
                Assim, para dar mais garantia dos serviços prestados, bem como, visando à segurança dos nossos Usuários, se faz necessário a utilização de
                dados pessoais dos mesmos, para que possam ser identificados dentro da Lógica de Localização do Transporte Escolar em serviço.
            </Text>
            <Text style={styles.text}>
                Portanto, os dados pessoais de nossos Usuários serão utilizados no objetivo único de identificá-los, no momento que estes estiverem em trânsito,
                em um dos meios de Transporte Escolar disponibilizados pela CNIT, em parceria com seus Contratantes.
            </Text>
            <Text style={styles.text}>
                Dessa forma, visando dar segurança aos nossos Usuários, com informações seguras e atualizadas a seus Parentes e ao Poder Público - que figura
                como Contratante do Serviço Gratuito de Transporte Escolar - os Dados Pessoais de nossos Usuários serão utilizados em aplicativos de finalidade
                exclusiva, como já deduzido alhures, contudo, com a máxima segurança, para que não se extrapole a utilização destes, seguindo, rigorosamente,
                o comando legal da LGPD - Lei Geral de Proteção de Dados.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    text: {
        textAlign: 'justify',
        marginBottom: 10
    }
})