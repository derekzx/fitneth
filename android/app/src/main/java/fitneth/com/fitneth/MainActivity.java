package fitneth.com.fitneth;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;

import android.app.AlertDialog;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.preference.PreferenceManager;
import android.support.design.widget.AppBarLayout;
import android.support.design.widget.CoordinatorLayout;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;
import android.support.v4.view.ViewPager;
import android.support.v7.widget.Toolbar;
import android.view.View;

//import com.mikepenz.materialdrawer.AccountHeader;
//import com.mikepenz.materialdrawer.AccountHeaderBuilder;
//import com.mikepenz.materialdrawer.Drawer;
//import com.mikepenz.materialdrawer.DrawerBuilder;
//import com.mikepenz.materialdrawer.model.PrimaryDrawerItem;
//import com.mikepenz.materialdrawer.model.interfaces.IDrawerItem;

//import java.io.IOException;
//import java.math.BigDecimal;
//import java.security.Security;
//
//import okhttp3.Response;
//import fitneth.com.fitneth.simpleetherwallet.R;
//import rehanced.com.simpleetherwallet.data.WatchWallet;
//import fitneth.com.fitneth.fragments.FragmentPrice;
//import fitneth.com.fitneth.FragmentTransactionsAll;
//import rehanced.com.simpleetherwallet.fragments.FragmentWallets;
//import rehanced.com.simpleetherwallet.interfaces.NetworkUpdateListener;
//import rehanced.com.simpleetherwallet.services.NotificationLauncher;
//import rehanced.com.simpleetherwallet.services.WalletGenService;
//import rehanced.com.simpleetherwallet.utils.AddressNameConverter;
//import rehanced.com.simpleetherwallet.utils.Dialogs;
//import rehanced.com.simpleetherwallet.utils.ExchangeCalculator;
//import rehanced.com.simpleetherwallet.utils.ExternalStorageHandler;
//import rehanced.com.simpleetherwallet.utils.OwnWalletUtils;
//import rehanced.com.simpleetherwallet.utils.Settings;
//import rehanced.com.simpleetherwallet.utils.WalletStorage;


public class MainActivity extends AppCompatActivity implements NetworkUpdateListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

}
