import React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { styled } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StyledView = styled(View);
const StyledText = styled(Text);

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: "absolute",
          overflow: "hidden",
          margin: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconPaddingVertically = focused ? 8 : 0;
          let iconPaddingHorizotally = focused ? 12 : 0;
          let iconBorderRadius = focused ? 20 : 0;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart";
          } else if (route.name === "Library") {
            iconName = focused ? "archive" : "archive";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          }

          return (
            <Octicons
              name={iconName}
              size={size}
              backgroundColor={focused ? "#e7faf7" : "#fff"}
              color={focused ? "#009677" : "#262626"}
              style={{
                paddingHorizontal: iconPaddingHorizotally,
                paddingVertical: iconPaddingVertically,
                borderRadius: iconBorderRadius,
              }}
            />
          );
        },
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f3f4f6",
            },
            headerTitleStyle: {
              fontSize: 26,
              fontWeight: "bold",
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Home2"
            component={HomeTabs}
            options={{
              title: "",
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#ffffff",
              },
            }}
          />
          <Stack.Screen
            name="Library"
            component={Library}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#ffffff",
              },
            }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="TemplateEditor"
            component={TemplateEditor}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#f3f4f6",
              },
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#f3f4f6",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function Home({ navigation }) {
  return (
    <StyledView className="px-4">
      <StyledText className="font-bold text-3xl text-neutral-800 mb-4">
        Explore Prompts
      </StyledText>
      <StyledView className="flex-row mb-2">
        <StyledView className="flex-grow pr-4 flex flex-row align-middle border-2 border-neutral-200 px-2 mr-2 rounded-lg bg-neutral-50">
          <Octicons
            name="search"
            className=" text-xl mr-2 text-neutral-400 align-middle"
          />
          <TextInput placeholder="Search" className=" text-base" />
        </StyledView>
        <StyledView className="flex-none">
          <Octicons name="sort-desc" className="text-neutral-800 text-3xl" />
        </StyledView>
      </StyledView>

      <StyledView className="flex flex-row my-2">
        <StyledText className="border-2 text-base mr-2 py-1 px-2 rounded-lg bg-neutral-800 text-white">
          All
        </StyledText>
        <StyledText className="text-center text-base mr-2 py-1 px-2 rounded-lg border-2 border-neutral-200 text-neutral-400">
          Latest
        </StyledText>
        <StyledText className="text-center text-base mr-2 py-1 px-2 rounded-lg border-2 border-neutral-200 text-neutral-400">
          DoDoooo
        </StyledText>
      </StyledView>
      <ScrollView className="bg-neutral-100">
        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
          <StyledView className="relative  overflow-hidden pt-4 rounded-3xl px-4 bg-white my-2">
            <StyledView className="flex flex-wrap justify-center rounded-3xl ">
              <StyledView className="flex flex-row">
                <Image
                  source={{
                    uri: "https://cdn.midjourney.com/3c281a16-4b0f-491b-b3ce-62a6e4a48779/0_2.png",
                  }}
                  className="w-1/2 h-auto aspect-square object-cover rounded-tl-3xl"
                />
                <Image
                  source={{
                    uri: "https://cdn.midjourney.com/8d35e73e-c706-4107-9d84-3a0652dcea14/0_0.png",
                  }}
                  className="w-1/2 h-auto aspect-square object-cover rounded-tr-3xl"
                />
              </StyledView>
              <StyledView className="flex flex-row">
                <Image
                  source={{
                    uri: "https://cdn.midjourney.com/ad9fefea-3204-4b6a-b8ec-6781852357b8/0_0.png",
                  }}
                  className="w-1/2 h-auto aspect-square object-cover rounded-bl-3xl"
                />
                <Image
                  source={{
                    uri: "https://cdn.midjourney.com/4a2d4c00-be9f-43fd-b20e-b142f028db2d/0_1.png",
                  }}
                  className="w-1/2 h-auto aspect-square object-cover rounded-br-3xl"
                />
              </StyledView>
            </StyledView>
            <StyledView className="flex flex-row items-center">
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginRight: 10,
                }}
                source={{ uri: "https://i.pravatar.cc/100" }}
              />
              <StyledView className="flex flex-col flex-grow my-4">
                <StyledText className="text-gray-700 font-bold text-lg mb-1">
                  Beautiful Girl
                </StyledText>
                <StyledText className="text-gray-500 text-sm">
                  by DoDo
                </StyledText>
              </StyledView>
              <StyledText className="bg-neutral-800 p-2 rounded-xl ml-auto font-bold text-lg text-white">
                $1.99
              </StyledText>
            </StyledView>
          </StyledView>
        </TouchableOpacity>
      </ScrollView>
    </StyledView>
  );
}

function Details() {
  return (
    <StyledView className="flex flex-col h-screen justify-between bg-white">
      <StyledView className="flex-none">
        <Image
          source={{
            uri: "https://cdn.midjourney.com/4a2d4c00-be9f-43fd-b20e-b142f028db2d/0_1.png",
          }}
          className="h-80 w-auto aspect-auto object-scale-down"
          resizeMode="center"
        />
      </StyledView>
      <StyledView className="grow">
        <ScrollView>
          <StyledView className="px-4">
            <StyledText className="font-bold text-xl">
              Beautiful Girl
            </StyledText>
            <StyledView className="flex flex-row items-center my-2">
              <Image
                className="rounded-full h-5 w-5 mr-2"
                source={{ uri: "https://i.pravatar.cc/100" }}
              />
              <StyledView className="flex flex-col flex-grow">
                <StyledText className="text-gray-500 text-base">
                  Dodo
                </StyledText>
              </StyledView>
            </StyledView>
            <StyledView className="flex flex-row">
              <StyledText className="text-center text-base mr-2 my-2 py-1 px-2 rounded-md border-2 border-neutral-200 text-neutral-400">
                Midjourney v5
              </StyledText>
              <StyledText className="text-center text-base mr-2 my-2 py-1 px-2 rounded-md border-2 border-neutral-200 text-neutral-400">
                DoDoooo
              </StyledText>
              <StyledText className="text-center text-base mr-2 my-2 py-1 px-2 rounded-md border-2 border-neutral-200 text-neutral-400">
                Latest
              </StyledText>
            </StyledView>
            <StyledText className=" text-base mt-4">Description</StyledText>
            <StyledText className="text-gray-400 text-base mt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </StyledText>
          </StyledView>
        </ScrollView>
      </StyledView>
      <StyledView className="flex-none shadow-lg bg-white px-2 py-2 mb-20 border-t-2 border-gray-100">
        <StyledView className="flex flex-row">
          <StyledView className="flex flex-col flex-grow pl-4">
            <StyledText className="text-gray-500 text-sm">Price</StyledText>
            <StyledText className="text-gray-700 font-bold text-xl mb-1">
              $1.99
            </StyledText>
          </StyledView>
          <StyledView>
            <StyledText className="font-bold text-lg text-white bg-teal-500 px-6 py-2 rounded-md ">
              Buy Now
            </StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}

function Favorites() {
  return (
    <StyledView className="px-4">
      <StyledText className="font-bold text-3xl text-neutral-800 mb-4">
        Favorites
      </StyledText>
      <StyledView className="flex-row mb-2">
        <StyledView className="flex-grow pr-4 flex flex-row align-middle border-2 border-neutral-200 px-2 mr-2 rounded-lg">
          <Octicons
            name="search"
            className=" text-xl mr-2 text-neutral-400 align-middle"
          />
          <TextInput placeholder="Search" className=" text-base" />
        </StyledView>
        <StyledView className="flex-none">
          <Octicons name="sort-desc" className="text-neutral-800 text-3xl" />
        </StyledView>
      </StyledView>
      <ScrollView className="mt-2">
        <StyledView className="relative my-2">
          <StyledView className="flex flex-row rounded-2xl bg-white">
            <StyledView className="">
              <Image
                source={{
                  uri: "https://cdn.midjourney.com/3c281a16-4b0f-491b-b3ce-62a6e4a48779/0_2.png",
                }}
                className="w-32 h-32 aspect-square object-cover rounded-l-2xl"
              />
            </StyledView>
            <StyledView className="flex flex-col p-4">
              <StyledText className="text-lg">Beautiful Girls</StyledText>
              <StyledText className="text-base text-neutral-500 mt-1">
                by Dodo
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="absolute bottom-0 right-0 m-2">
            <StyledText className="bg-teal-500 text-white px-4 py-2 rounded-sm font-bold text-base">
              Buy Now
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="relative my-2">
          <StyledView className="flex flex-row rounded-xl bg-white">
            <StyledView className="">
              <Image
                source={{
                  uri: "https://cdn.midjourney.com/3e542c84-bb7d-479f-a849-856d3f14baa8/0_0.png",
                }}
                className="w-32 h-32 aspect-square object-cover rounded-l-2xl"
              />
            </StyledView>
            <StyledView className="flex flex-col p-4">
              <StyledText className="text-lg">Beautiful Girls</StyledText>
              <StyledText className="text-base text-neutral-500 mt-1">
                by Dodo
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="absolute bottom-0 right-0 m-2">
            <StyledText className="bg-teal-500 text-white px-4 py-2 rounded-sm font-bold text-base">
              Buy Now
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledView>
  );
}

function Library({ navigation }) {
  return (
    <StyledView className="px-4">
      <StyledText className="font-bold text-3xl text-neutral-800 mb-4">
        Library
      </StyledText>
      <StyledView className="flex-row mb-2">
        <StyledView className="flex-grow pr-4 flex flex-row align-middle border-2 border-neutral-200 px-2 mr-2 rounded-lg">
          <Octicons
            name="search"
            className=" text-xl mr-2 text-neutral-400 align-middle"
          />
          <TextInput placeholder="Search" className="text-base" />
        </StyledView>
        <StyledView className="flex-none">
          <Octicons name="sort-desc" className="text-neutral-800 text-3xl" />
        </StyledView>
      </StyledView>
      <ScrollView className="mt-2">
        <StyledView className="relative my-2">
          <StyledView className="flex flex-row rounded-2xl bg-white">
            <StyledView className="">
              <Image
                source={{
                  uri: "https://cdn.midjourney.com/3c281a16-4b0f-491b-b3ce-62a6e4a48779/0_2.png",
                }}
                className="w-32 h-32 aspect-square object-cover rounded-l-2xl"
              />
            </StyledView>
            <StyledView className="flex flex-col p-4">
              <StyledText className="text-lg">Beautiful Girls</StyledText>
              <StyledText className="text-base text-neutral-500 mt-1">
                by Dodo
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="absolute bottom-0 right-0 m-2 px-3 py-2 bg-teal-500 rounded-full">
            <TouchableOpacity
              onPress={() => navigation.navigate("TemplateEditor")}
            >
              <Octicons name="pencil" className=" text-white text-base" />
            </TouchableOpacity>
          </StyledView>
        </StyledView>
        <StyledView className="relative my-2">
          <StyledView className="flex flex-row rounded-2xl bg-white">
            <StyledView className="">
              <Image
                source={{
                  uri: "https://cdn.midjourney.com/316c2558-cade-46fc-89df-6481fe796b65/0_2.png",
                }}
                className="w-32 h-32 aspect-square object-cover rounded-l-2xl"
              />
            </StyledView>
            <StyledView className="flex flex-col p-4">
              <StyledText className="text-lg">Beautiful Girls</StyledText>
              <StyledText className="text-base text-neutral-500 mt-1">
                by Dodo
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="absolute bottom-0 right-0 m-2 px-3 py-2 bg-teal-500 rounded-full">
            <TouchableOpacity
              onPress={() => navigation.navigate("TemplateEditor")}
            >
              <Octicons name="pencil" className=" text-white text-base" />
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledView>
  );
}

function TemplateEditor() {
  const [activeTab, setActiveTab] = useState("description"); // initialize the active tab to "editor"

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    <StyledView className="flex-1 px-4">
      <StyledView className="flex flex-row mb-4">
        <Image
          source={{
            uri: "https://cdn.midjourney.com/316c2558-cade-46fc-89df-6481fe796b65/0_2.png",
          }}
          className="w-20 h-20 object-cover rounded-lg mr-4"
        />
        <StyledView className="flex flex-col">
          <StyledText className="font-bold text-2xl text-neutral-800 mr-2">
            Beautiful Girl
          </StyledText>
          <StyledText className="text-gray-500 text-sm">by DoDo</StyledText>
        </StyledView>
      </StyledView>
      <StyledView className="flex flex-row bg-white rounded-t-lg px-2">
        <Pressable
          className={`basis-1/5 mr-2 border-b-2 ${
            activeTab === "editor" ? "border-black" : "border-white"
          } p-2 cursor-pointer`}
          onPress={() => handleTabPress("editor")}
        >
          <StyledText
            className={`text-lg text-center ${
              activeTab === "editor"
                ? "text-black font-bold"
                : "text-neutral-400"
            }`}
          >
            Editor
          </StyledText>
        </Pressable>
        <Pressable
          className={`basis-2/5 px-2 border-b-2 ${
            activeTab === "description" ? "border-black" : "border-white"
          } cursor-pointer`}
          onPress={() => handleTabPress("description")}
        >
          <StyledText
            className={`text-lg text-center ${
              activeTab === "description"
                ? "text-black  font-bold"
                : "text-neutral-400"
            } p-2`}
          >
            Description
          </StyledText>
        </Pressable>
        <Pressable
          className={`basis-2/5 px-2 border-b-2 ${
            activeTab === "parameters" ? "border-black" : "border-white"
          } cursor-pointer`}
          onPress={() => handleTabPress("parameters")}
        >
          <StyledText
            className={`text-lg text-center ${
              activeTab === "parameters"
                ? " font-bold text-black"
                : "text-neutral-400"
            } p-2`}
          >
            Parameters
          </StyledText>
        </Pressable>
      </StyledView>
      <ScrollView className="grow bg-white px-4 pt-4 mb-20 rounded-b-lg">
        {activeTab === "editor" && (
          <StyledView>
            <StyledText className="text-lg text-neutral-400 inline">
              It does not support high-quality interaction experience on
              different platforms.
            </StyledText>
            <TextInput
              placeholder="(Object)"
              placeholderTextColor="#000000"
              className="text-lg border-b-2 border-neutral-200 px-2 text-center w-auto py-1 inline"
            />
          </StyledView>
        )}
        {activeTab === "description" && (
          <StyledView>
            <StyledText className="text-lg text-neutral-400">
              Its capabilities could be extended to include hover, blur, focus,
              and more.
            </StyledText>
          </StyledView>
        )}
        {activeTab === "parameters" && (
          <StyledView className="flex flex-col ">
            <StyledView className="flex flex-row">
              <StyledText className="text-lg text-neutral-400 grow">
                Parameters
              </StyledText>
              <TextInput
                placeholder="0-10"
                placeholderTextColor="#000000"
                className="text-lg border-b-2 border-neutral-200 px-2 w-auto flex-none "
              />
            </StyledView>
            <StyledView className="flex flex-row my-2">
              <StyledText className="text-lg text-neutral-400 grow">
                Parameters
              </StyledText>
              <TextInput
                placeholder="0-10"
                placeholderTextColor="#000000"
                className="text-lg border-b-2 border-neutral-200 px-2 w-auto flex-none "
              />
            </StyledView>
          </StyledView>
        )}
      </ScrollView>

      <StyledView className="absolute left-0 right-0 bottom-0">
        <Pressable>
          <StyledText className="text-lg font-bold text-center text-white bg-teal-500 py-2 mx-4 my-4 rounded-md">
            Copy Prompt
          </StyledText>
        </Pressable>
      </StyledView>
    </StyledView>
  );
}

function Profile({ navigation }) {
  const [activeTab, setActiveTab] = useState("activity"); // initialize the active tab to "editor"

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };
  return (
    <StyledView className="flex flex-1 px-4 relative">
      <TouchableOpacity
        className="absolute top-2 right-2"
        onPress={() => navigation.navigate("EditProfile")}
      >
        <StyledView className="flex flex-1 px-4 relative">
          <Feather name="edit" className="text-2xl text-neutral-800" />
        </StyledView>
      </TouchableOpacity>
      <StyledView className="mx-auto">
        <Image
          className="w-32 h-32 rounded-full mx-auto"
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png",
          }}
        />
        <StyledText className="font-bold text-2xl text-neutral-800 text-center my-2">
          DoDoaa
        </StyledText>
      </StyledView>
      <StyledView className="flex flex-row my-2 p-2 rounded-3xl bg-white">
        <Pressable
          className={`basis-1/2 py-2 pr-2 rounded-2xl ${
            activeTab === "activity" ? "bg-neutral-100" : "bg-white"
          } cursor-pointer`}
          onPress={() => handleTabPress("activity")}
        >
          <StyledText className="text-center text-neutral-800 text-base font-bold ">
            Activity
          </StyledText>
        </Pressable>
        <Pressable
          className={`basis-1/2 py-2 pl-2 rounded-2xl ${
            activeTab === "information" ? "bg-neutral-100" : "bg-white"
          } cursor-pointer`}
          onPress={() => handleTabPress("information")}
        >
          <StyledText className="text-center text-neutral-800 text-base font-bold">
            Information
          </StyledText>
        </Pressable>
      </StyledView>
      {activeTab === "activity" && (
        <StyledView className="flex flex-col divide-y divide-neutral-200 my-2 px-4">
          <StyledView className="flex flex-row text-neutral-400 py-2">
            <Octicons name="info" className="text-lg text-neutral-400" />
            <StyledText className="text-neutral-500 ml-2 align-bottom text-base">
              Welcome to Miji Market
            </StyledText>
          </StyledView>
          <StyledView className="flex flex-row text-neutral-400 py-2">
            <Octicons name="info" className="text-lg text-neutral-400" />
            <StyledText className="text-neutral-500 ml-2 align-bottom text-base">
              You have bought "Beautiful" template for $1.99. Thank you so much.
            </StyledText>
          </StyledView>
          <StyledView className="flex flex-row text-neutral-400 py-2">
            <Octicons name="info" className="text-lg text-neutral-400" />
            <StyledText className="text-neutral-500 ml-2 align-bottom text-base">
              You sold "ABC" template for $1.99
            </StyledText>
          </StyledView>
        </StyledView>
      )}
      {activeTab === "information" && (
        <StyledView className="flex flex-col divide-y divide-neutral-200 my-2 px-4">
          <StyledView className="flex flex-row items-center text-neutral-400 py-2">
            <Octicons
              name="person"
              className="text-xl text-neutral-400 align-middle px-4"
            />
            <StyledView>
              <StyledText className="text-neutral-400 ml-2 align-bottom text-xs">
                Username
              </StyledText>
              <StyledText className="text-neutral-800 ml-2 align-bottom text-base">
                dodo123
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView className="flex flex-row items-center text-neutral-400 py-2">
            <Octicons
              name="mail"
              className="text-xl text-neutral-400 align-middle px-4"
            />
            <StyledView>
              <StyledText className="text-neutral-400 ml-2 align-bottom text-xs">
                Email
              </StyledText>
              <StyledText className="text-neutral-800 ml-2 align-bottom text-base">
                babybabybay@gmail.com
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      )}
    </StyledView>
  );
}

function EditProfile() {
  return (
    <StyledView className="px-4">
      <StyledText className="text-2xl font-bold mb-4">Register</StyledText>
      <StyledView className="flex-grow pr-4 flex flex-row align-middle py-2 px-2 my-2 rounded-2xl bg-neutral-50 divider-y divider-neutral-200">
        <StyledView className="basis-1/6">
          <Octicons
            name="person"
            className=" text-xl mr-2 text-neutral-400 align-middle px-2 text-center"
          />
        </StyledView>
        <StyledView className="basis-5/6">
          <TextInput
            placeholder="Username"
            className="border-l-2 border-neutral-200 text-base pl-4"
          />
        </StyledView>
      </StyledView>
      <StyledView className="flex-grow pr-4 flex flex-row align-middle py-2 px-2 my-2 rounded-2xl bg-neutral-50 divider-y divider-neutral-200">
        <StyledView className="basis-1/6">
          <Octicons
            name="mail"
            className=" text-xl mr-2 text-neutral-400 align-middle px-2 text-center"
          />
        </StyledView>
        <StyledView className="basis-5/6">
          <TextInput
            placeholder="abc@email.com"
            className="border-l-2 border-neutral-200 text-base pl-4"
          />
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledText className="font-bold text-lg text-white bg-teal-500 px-6 py-2 rounded-2xl mt-4 ">
          Register
        </StyledText>
      </StyledView>
    </StyledView>
  );
}
