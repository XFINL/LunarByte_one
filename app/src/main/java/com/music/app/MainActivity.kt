package com.music.app

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.music.app.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private val fragments = listOf(
        SearchFragment(),
        PlayerFragment(),
        ProfileFragment()
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.viewPager.adapter = ViewPagerAdapter(this)
        binding.viewPager.isUserInputEnabled = false

        binding.tabSearch.setOnClickListener { selectTab(0) }
        binding.tabPlayer.setOnClickListener { selectTab(1) }
        binding.tabProfile.setOnClickListener { selectTab(2) }

        selectTab(1)
    }

    private fun selectTab(index: Int) {
        binding.viewPager.setCurrentItem(index, false)
        
        binding.iconSearch.alpha = if (index == 0) 1.0f else 0.5f
        binding.iconPlayer.alpha = if (index == 1) 1.0f else 0.5f
        binding.iconProfile.alpha = if (index == 2) 1.0f else 0.5f
    }

    inner class ViewPagerAdapter(fragmentActivity: FragmentActivity) : FragmentStateAdapter(fragmentActivity) {
        override fun getItemCount(): Int = fragments.size
        override fun createFragment(position: Int): Fragment = fragments[position]
    }
}
