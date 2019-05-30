<template>
    <v-app dark>
        <v-toolbar
            color="primary"
            dark
            fixed
            app
            clipped-right
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Toolbar</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>

        <v-navigation-drawer
            v-model="drawer"
            fixed
            app
        >
            <v-list dense>
                <v-list-tile @click.stop="left = !left">
                <v-list-tile-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
                </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
            v-model="left"
            temporary
            fixed
        ></v-navigation-drawer>

        <v-content>
            <v-container fluid fill-height>
                <v-layout justify-center align-center>
                    <v-flex shrink>
                        
                        <p>CONTENT</p>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>

        <v-footer class="primary--text v-toolbar__content" app>
            <span>Vuetify</span>
            <v-spacer></v-spacer>
            <span>&copy; 2017</span>
        </v-footer>
    </v-app>
</template>


<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    props: {
        source: String
    },
    data: () => ({
        drawer: false,
        left: false
    })
}
</script>
